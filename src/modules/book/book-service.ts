import BookModel from "@repositories/book/book-model";
import { BookInput, BookOutput } from "@repositories/book/book-type";

export interface IBookService {
  create(input: BookInput): Promise<BookOutput>;
  getBookById(id: string): Promise<BookOutput>;
  getAll(): Promise<any>;
  delete(id: string): Promise<any>;
  update(id: string, newData: BookInput): Promise<BookOutput>;
}
export class BookService {
  public async create(input: BookInput): Promise<BookOutput> {
    console.log("Params.BookService.params: ", input);
    let res = await BookModel.create(input);
    return res;
  }
  public async getBookById(id: string): Promise<BookOutput> {
    let res = await BookModel.findById(id);
    return res;
  }
  public async getAll(): Promise<any> {
    let listBook = await BookModel.find();
    return listBook;
  }
  public async delete(id: string): Promise<any> {
    let res = await BookModel.deleteOne({ _id: id });
    return res;
  }
  public async update(id: string, params: BookInput): Promise<BookOutput> {
    const updatedBook = await BookModel.findByIdAndUpdate(id, params, {
      new: true,
    });
    return updatedBook;
  }
}
