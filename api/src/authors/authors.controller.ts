import { Authors, Author } from '../../interfaces/author/author.interface';
import { AuthorsService } from './authors.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Get()
  authors(): Authors {
    return this.authorsService.authors();
  }

  @Get(':authorId')
  author(@Param('authorId') authorId: string): Author {
    return this.authorsService.author(Number(authorId));
  }
}
