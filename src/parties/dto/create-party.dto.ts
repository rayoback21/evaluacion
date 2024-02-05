import { ApiProperty } from "@nestjs/swagger"; 

export class CreatePartyDto {

        @ApiProperty({ example: 1 })
        id: number;
    
        @ApiProperty({ example: 'NombreEjemplo' })
        name: string;
    
        @ApiProperty({ example: '2024-02-01T12:00:00Z' })
        date: Date;
    
        @ApiProperty({ example: 'DireccionEjemplo' })
        address: string;
    
        @ApiProperty({ example: '2024-02-01T12:00:00Z' })
        createdAt: Date;
    
        @ApiProperty({ example: '2024-02-01T12:00:00Z' })
        updatedAt: Date;
    }
    
