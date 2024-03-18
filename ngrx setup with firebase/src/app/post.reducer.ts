// src/app/store/post.reducer.ts
import { createReducer, on } from '@ngrx/store';

import * as PostActions from './post.actions';
import { Post } from './post.model';
import { IBook } from './Ibook';

export interface PostState {
  posts: IBook[];
 
}

export const initialState: PostState = {
  posts: []
};

export const postReducer = createReducer(
  initialState,
 on(PostActions.loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts
  })),

);
