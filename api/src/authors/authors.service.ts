import { Injectable } from '@nestjs/common';
import { Authors, Author } from '../../interfaces/author/author.interface';
import { authors as authorsMock } from './../../mocks/author/author';

@Injectable()
export class AuthorsService {
  items = authorsMock;

  authors(): Authors {
    return this.items;
  }

  author(id: number): Author {
    return this.items.find(item => item.id === id);
  }
}
