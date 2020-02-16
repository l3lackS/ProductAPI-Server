import { Injectable } from '@nestjs/common';

import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Product } from "./interfaces/product.interface";
import { CreateProductDTO } from "./dto/product.dto";

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

    // Get all products
    async getProducts(): Promise<Product[]> {
        const products = await this.productModel.find();
        return products;
    }
    
    // Get a single Product
    async getProductById(productID: string): Promise<Product> {
        const product = await this.productModel.findById(productID); 
        return product;
    }

    // Get a single Product
    async getProductByName(name: string): Promise<Product[]> {
        const productByName = await this.productModel.find({"name": {$regex: ".*" + name + ".*", $options: "i"}}); 
        return productByName;
    }

    // Post a single product
    async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
        const newProduct = new this.productModel(createProductDTO);
        return newProduct.save();
    }

    // Delete Product
    async deleteProduct(productID: string): Promise<any> {
        const deletedProduct = await this.productModel.findOneAndDelete(productID);
        return deletedProduct;
    }

    // Put a single product
    async updateProduct(productID: string, createProductDTO: CreateProductDTO): Promise<Product> {
        const updatedProduct = await this.productModel
                            .findByIdAndUpdate(productID, createProductDTO, {new: true});
        return updatedProduct;
    }

    // Get latest products
    async getLatestProducts(): Promise<Product[]> {
        const latestProducts = await this.productModel.find().sort({createdAt: -1}).limit(5);
        return latestProducts;
    }

}
