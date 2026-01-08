export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  imageUrl?: string
}

export const getCertificates = async (): Promise<Certificate[]> => {
  // В будущем здесь будет реальный API запрос
  return []
}

export const addCertificate = async (certificate: Omit<Certificate, 'id'>): Promise<Certificate> => {
  // В будущем здесь будет реальный API запрос
  return {
    id: Date.now().toString(),
    ...certificate
  }
}

export const deleteCertificate = async (id: string): Promise<void> => {
  // В будущем здесь будет реальный API запрос
  console.log('Deleting certificate:', id)
}
