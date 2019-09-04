import {Model} from '@nozbe/watermelondb';
import {action, field} from '@nozbe/watermelondb/decorators';

export default class Usuario extends Model {
  static usuario = 'usuarios';

  @field('name')
  name;

  @action async addComment(body) {
    return this.collections.get('comments').create(comment => {
      comment.post.set(this);
      comment.body = body;
    });
  }
}
