// gif.schema.ts
import * as mongoose from 'mongoose';

export const GifSchema = new mongoose.Schema({
  type: { type: String, default: 'gif' },
  id: String,
  slug: String,
  url: String,
  bitly_url: String,
  embed_url: String,
  username: String,
  source: String,
  rating: String,
  content_url: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  source_tld: String,
  source_post_url: String,
  update_datetime: String,
  create_datetime: { type: Date, default: Date.now },
  import_datetime: String,
  trending_datetime: String,
  images: { type: mongoose.Schema.Types.Mixed },
  title: String,
  alt_text: String,
});

export interface GifDocument extends mongoose.Document {
  type: string;
  slug: string;
  url: string;
  title: string;
  id?: string;
  bitly_url?: string;
  embed_url?: string;
  username?: string;
  source?: string;
  rating?: string;
  content_url?: string;
  user?: mongoose.Types.ObjectId;
  source_tld?: string;
  source_post_url?: string;
  update_datetime?: string;
  create_datetime?: string;
  import_datetime?: string;
  trending_datetime?: string;
  images?: any;
  alt_text?: string;
}

export const GifModel = mongoose.model<GifDocument>('Gif', GifSchema);
