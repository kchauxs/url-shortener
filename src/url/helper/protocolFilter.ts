export const protocolFilter = (url: string) => {
  const protocol = url.split(':')[0];
  const validProtocols = ['http', 'https'];
  return validProtocols.includes(protocol);
};
