import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

// Define Enum Separately
export enum Role {
  INTERN = 'INTERN',
  ENGINEER = 'ENGINEER',
  ADMIN = 'ADMIN',
}

export class CreateEmployeeDto {
  @ApiProperty({ example: 'John Doe', description: 'Employee name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'john@example.com', description: 'Employee email' })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'ENGINEER',
    description: 'Role of the employee',
    enum: Role,
  })
  @IsEnum(Role, { message: 'Valid role required' })
  role: Role;
}
