import { service } from './axios'

const DEFAULT_ENCODE = 'UTF-8'

export async function login(content: any): Promise<Buffer> {
  const res = await service.post(`/momopop/v1_0/STAR_REQ_Login`, content, { responseType: 'arraybuffer', headers: {'Content-Type': 'application/octet-stream;charset=UTF-8'} })
  return Buffer.from(res.data)
}

export async function loginCode(content: any): Promise<Buffer> {
  const res = await service.post(`/momopop/v1_0/STAR_REQ_AccountCode`, content, { responseType: 'arraybuffer', headers: {'Content-Type': 'application/octet-stream;charset=UTF-8'} })
  return Buffer.from(res.data)
}