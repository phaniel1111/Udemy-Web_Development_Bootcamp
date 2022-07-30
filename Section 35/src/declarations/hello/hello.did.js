export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'main' : IDL.Func([IDL.Text], [IDL.Text], []) });
};
export const init = ({ IDL }) => { return []; };
