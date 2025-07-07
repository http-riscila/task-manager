import { Controller, Post, Body } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  registerUser(@Body() data: RegisterUserDto) {
    return this.authService.register(data);
  }

  @Post('login')
  LoginUser(@Body() credentials: LoginUserDto) {
    return this.authService.login(credentials);
  }
}
