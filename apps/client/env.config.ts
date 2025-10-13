// Configuração de variáveis de ambiente
export const ENV_CONFIG = {
  // URL da API
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  
  // Timeout da API
  API_TIMEOUT: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || '10000'),
  
  // Modo de debug
  DEBUG_MODE: process.env.NEXT_PUBLIC_DEBUG_MODE === 'true',
  
  // Usar mocks em caso de 404
  USE_MOCKS_ON_404: process.env.NEXT_PUBLIC_USE_MOCKS_ON_404 === 'true',
  
  // Chaves para localStorage
  AUTH_TOKEN_KEY: process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY || 'access_token',
  REFRESH_TOKEN_KEY: process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY || 'refresh_token',
  CONTABILIDADE_KEY: process.env.NEXT_PUBLIC_CONTABILIDADE_KEY || 'contabilidade_ativa_id',
  
  // CORS
  CORS_ORIGIN: process.env.NEXT_PUBLIC_CORS_ORIGIN || 'http://localhost:3001',
}

// Validação das variáveis obrigatórias
export const validateEnv = () => {
  const requiredVars = ['API_URL']
  
  for (const varName of requiredVars) {
    if (!process.env[`NEXT_PUBLIC_${varName}`]) {
      console.warn(`⚠️ Variável de ambiente ${varName} não encontrada, usando valor padrão`)
    }
  }
}

// Executar validação
validateEnv()
