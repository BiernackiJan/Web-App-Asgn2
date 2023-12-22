import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const MovieSchema = new Schema({
  movie: { type: Object, unique: true, required: true },
  reviews: [{ type: Schema.Types.Mixed }]
});

MovieSchema.statics.findByMovieDBId = function (id) {
  return this.findOne({ id: id });
};

MovieSchema.statics.findByMovie = function (movie) {
  return this.findOne({ movie: movie });
};

export default mongoose.model('Movies', MovieSchema);


