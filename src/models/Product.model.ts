import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: "products",
})

export default class Product extends Model<Product> {
    @Column({
        type: DataType.STRING(50),
        allowNull: false,
    })
    declare name: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    declare description: string;

    @Column({
        type: DataType.DECIMAL(5, 2),
        allowNull: false,
    })
    declare price: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })
    declare available: boolean;
}