export interface Creds {
  login: string,
  password: string,
}

const CREDS = {
  login: 'Admin',
  password: '123456',
};

export function setCredentials():void {
  localStorage.setItem('creds', JSON.stringify(CREDS));
};

export function getCredentials():Creds | void {
  const creds = localStorage.getItem('creds');
  if (creds) {
    return JSON.parse(creds);
  }
};
