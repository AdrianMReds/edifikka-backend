import { BankAccount } from "@models";

const bankAccountQueries = {
  bankAccounts: async (
    _,
    { params = { page: 1, pageSize: 20 } },
    { authScope, loaders }
  ) => {
    const { pageSize, page } = params;

    return {
      results: async () => {
        const bankAccounts = await BankAccount.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize);

        return loaders.bankaccount.many(bankAccounts.map(({ id }) => id));
      },
      info: async () => {
        const count = await BankAccount.countDocuments();

        const pages = Math.ceil(count / pageSize);
        const prev = page > 1 ? page - 1 : null;
        const next = page < pages ? page + 1 : null;

        return {
          count,
          pages,
          prev,
          next,
        };
      },
    };
  },
  bankAccount: async (_, { id }, { loaders }) => loaders.bankaccount.one(id),
};

export default bankAccountQueries;
