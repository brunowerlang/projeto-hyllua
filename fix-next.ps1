Write-Host "🔎 Finalizando processos do Node..."
taskkill /F /IM node.exe /T 2>$null

Write-Host "🗑️ Apagando pasta .next..."
if (Test-Path ".next") { Remove-Item ".next" -Recurse -Force }

Write-Host "🗑️ Apagando node_modules..."
if (Test-Path "node_modules") { Remove-Item "node_modules" -Recurse -Force }

Write-Host "🗑️ Apagando package-lock.json..."
if (Test-Path "package-lock.json") { Remove-Item "package-lock.json" -Force }

Write-Host "📦 Instalando dependências..."
npm install

Write-Host "⚡ Rodando build do Next.js..."
npm run build
