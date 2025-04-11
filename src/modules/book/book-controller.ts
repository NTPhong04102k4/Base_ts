import { NextFunction, Request, Response } from "express";
import { BookService, IBookService } from "./book-service";

class BookController {
  private bookService: IBookService;
  constructor() {
    this.bookService = new BookService();
  }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    let newBook = req.body;
    return await this.bookService.create(newBook);
  };
  public getBookById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    let id = req.params.id;
    console.log("id: ", id);
    let book = await this.bookService.getBookById(id);
    return book;
  };
  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    return await this.bookService.getAll();
  };
  public delete = async (req: Request, res: Response, next: NextFunction) => {
    let id = req.params.id;
    return await this.bookService.delete(id);
  };
  public update = async (req: Request, res: Response, next: NextFunction) => {
    let id = req.params.id;
    let updatedBook = req.body;
    return await this.bookService.update(id, updatedBook);
  };
}

export default new BookController();
