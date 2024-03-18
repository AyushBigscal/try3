// src/app/store/post.actions.ts
import { createAction, props } from '@ngrx/store';
import { Post } from './post.model';
import { IBook } from './Ibook';


export const loadPosts = createAction('[Post] Load Posts');

export const loadPostsSuccess = createAction(
  '[Post] Load Posts Success',
  props<{ posts: IBook[] }>()
);

export const loadPostsFailure = createAction(
  '[Post] Load Posts Failure',
  props<{ error: any }>()
);
