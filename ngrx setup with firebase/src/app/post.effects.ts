// src/app/store/post.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PostService } from './post.service';
// import { PostService } from '../services/post.service';
import * as PostActions from './post.actions';

@Injectable()
export class PostEffects {

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(PostActions.loadPosts),
    mergeMap(() => this.postService.getPosts()
      .pipe(
        map(posts => PostActions.loadPostsSuccess({ posts })),
        catchError(error => of(PostActions.loadPostsFailure({ error })))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private postService: PostService
  ) {}
}
