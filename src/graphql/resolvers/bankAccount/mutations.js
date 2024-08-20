import { BankAccount } from "@models";

const bankAccountMutations = {
  createBankAccount: async (_, { bankAccount }, { loaders }) => {
    try {
      const newBankAccount = new BankAccount(bankAccount);

      const savedBankAccount = await newBankAccount.save();

      return loaders.bankaccount.one(savedBankAccount._id);
    } catch (e) {
      return {
        status: 500,
        error: e,
      };
    }
  },
  updateBankAccount: async (_, { id, bankAccount }, { loaders }) => {
    const updatedBankAccount = await BankAccount.findByIdAndUpdate(
      id,
      { $set: bankAccount },
      { new: true, runValidators: true }
    );
    return loaders.bankaccount.one(updatedBankAccount._id);
  },
};

export default bankAccountMutations;
