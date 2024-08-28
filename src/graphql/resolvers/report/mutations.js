import { Report } from "@models";

const reportMutations = {
  createReport: async (_, { report }, { loaders }) => {
    try {
      const newReport = new Report(report);

      const savedReport = await newReport.save();

      return loaders.report.one(savedReport._id);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  },
  updateReport: async (_, { id, report }, { loaders }) => {
    try {
      const updatedReport = await Report.findByIdAndUpdate(
        id,
        { $set: report },
        { new: true, runValidators: true }
      );
      return loaders.report.one(updatedReport._id);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  },
};

export default reportMutations;
