export interface ContactMessage {
  name: string
  email: string
  phone?: string
  message: string
}

export const sendContactMessage = async (data: ContactMessage): Promise<void> => {
  // В будущем здесь будет реальный API запрос
  console.log('Sending contact message:', data)
  
  // Имитация задержки сети
  await new Promise(resolve => setTimeout(resolve, 1000))
}
