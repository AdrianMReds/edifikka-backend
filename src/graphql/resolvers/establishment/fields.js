const establishmentFields = {
  Establishment: {
    admins: async ({ admins }, _, { loaders }) => {
      if (!admins || !admins.length) {
        return [];
      }
      return loaders.user.many(admins);
    },
    bankAccounts: async ({ bankAccounts }, _, { loaders }) => {
      if (!bankAccounts || !bankAccounts.length) {
        return [];
      }
      return loaders.bankaccount.many(bankAccounts);
    },
  },
};

export default establishmentFields;
