import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async register(data: RegisterUserDto) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.user.create({
      data: { name: data.name, email: data.email, password: hashedPassword },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async validateUser(credentials: LoginUserDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: credentials.email },
    });

    if (!user || !(await bcrypt.compare(credentials.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  generateToken(userId: string) {
    const token = this.jwt.sign(
      { userId },
      { secret: process.env.JWT_SECRET, expiresIn: '4h' },
    );
    return token;
  }

  async login(credentials: LoginUserDto) {
    const user = await this.validateUser(credentials);
    const token = this.generateToken(user.id);

    return {
      accessToken: token,
      user: {
        id: user.id,
      },
    };
  }
}
