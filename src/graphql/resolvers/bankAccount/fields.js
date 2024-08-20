const bankAccountFields = {
  BankAccount: {
    movements: async ({ movements }, _, { loaders }) => {
      if (!movements || !movements.length) {
        return [];
      }
      return loaders.movement.many(movements);
    },
  },
};

export default bankAccountFields;
