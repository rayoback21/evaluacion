import { ApiProperty } from "@nestjs/swagger";

export class CreateCostumeDto {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 'NombreEjemplo' })
    name: string;

    @ApiProperty({ example: 'DescripciónEjemplo', required: false })
    description?: string;

    @ApiProperty({ example: ['Debilidad1', 'Debilidad2'] })
    weakness: string[];

    @ApiProperty({ example: ['Habilidad1', 'Habilidad2'] })
    skills: string[];

    @ApiProperty({ example: 100 })
    price: number;

    @ApiProperty({ example: true })
    stock: boolean;

    @ApiProperty({ example: '2024-02-01T12:00:00Z' })
    createdAt: Date;

    @ApiProperty({ example: '2024-02-01T12:00:00Z' })
    updatedAt: Date;
}

