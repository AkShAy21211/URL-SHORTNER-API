import { Schema, model, mongoose } from "mongoose";

const AnalyticsSchema = new Schema({
  urlId: { type: mongoose.Types.ObjectId, ref: "Url", required: true },
  userId: [{ type: mongoose.Types.ObjectId, ref: "User", required: true }],
  totalClicks: {
    type: Number,
    default: 0,
  },
  uniqueUsers: {
    type: Number,
    default: 0,
  },
  clickByDate: [
    {
      date: { type: Date },
      clickCount: { type: Number },
    },
  ],
  osType: [
    {
      osName: { type: String },
      uniqueClicks: { type: Number },
      uniqueUsers: { type: Number },
    },
  ],
  deviceType: [
    {
      deviceName: { type: String },
      uniqueClicks: { type: Number },
      uniqueUsers: { type: Number },
    },
  ],
});

const AnalyticsModel = model("Analytics", AnalyticsSchema);

export default AnalyticsModel;
