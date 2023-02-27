export const getCandidate = async (email: string) => {
  const response = await fetch(`${process.env.CANDIDATES_URL}${email}`);
  return response.json();
};
