import { BankAccount } from "@models";

const bankAccountMutations = {
  createBankAccount: async (_, { bankAccount }, { loaders }) => {
    try {
      const newBankAccount = new BankAccount(bankAccount);

      const savedBankAccount = await newBankAccount.save();

      return loaders.bankAccount.one(savedBankAccount._id);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  },
  updateBankAccount: async (_, { id, access }, { loaders }) => {
    const updatedAccess = await Access.findByIdAndUpdate(
      id,
      { $set: access },
      { new: true, runValidators: true }
    );
    return loaders.access.one(updatedAccess._id);
  },
};

export default bankAccountMutations;
