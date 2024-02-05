import { ApiProperty } from '@nestjs/swagger';

export class CreateAttendeeDto {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 'DNIExample' })
    dni: string;

    @ApiProperty({ example: 'NombreEjemplo' })
    firstName: string;

    @ApiProperty({ example: 'ApellidoEjemplo' })
    lastName: string;

    @ApiProperty({ example: 'DireccionEjemplo', required: false })
    address?: string;

    @ApiProperty({ example: 200 })
    money: number;

    @ApiProperty({ example: 25 })
    age: number;

    @ApiProperty({ example: ['Miedo1', 'Miedo2'] })
    fears: string[];

    @ApiProperty({ example: false })
    isNervous: boolean;

    @ApiProperty({ example: '2024-02-01T12:00:00Z' })
    createdAt: Date;

    @ApiProperty({ example: '2024-02-01T12:00:00Z' })
    updatedAt: Date;
}

