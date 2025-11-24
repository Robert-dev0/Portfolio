# 📧 Configuração do EmailJS para Formulário de Contato

Este guia mostra como configurar o EmailJS para que o formulário de contato funcione corretamente.

## 🚀 Passo a Passo

### 1. Criar Conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em **"Sign Up"** e crie uma conta gratuita
3. Confirme seu email

### 2. Adicionar Serviço de Email

1. No dashboard do EmailJS, vá em **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Para Gmail:
   - Clique em **"Connect Account"**
   - Faça login com sua conta Gmail
   - Autorize o EmailJS
5. Copie o **Service ID** (algo como `service_xxxxxxx`)

### 3. Criar Template de Email

1. Vá em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Configure o template com as seguintes variáveis:

**Subject (Assunto):**
```
Nova mensagem de {{from_name}} - {{subject}}
```

**Content (Conteúdo):**
```
Olá {{to_name}},

Você recebeu uma nova mensagem através do seu portfólio!

Nome: {{from_name}}
Email: {{from_email}}
Assunto: {{subject}}

Mensagem:
{{message}}

---
Esta mensagem foi enviada através do formulário de contato do seu portfólio.
Responda para: {{reply_to}}
```

**IMPORTANTE**: No campo "To email", coloque: `robertkawan2506@gmail.com`

4. Clique em **"Save"**
5. **Teste o template** clicando em "Test it" para garantir que está funcionando
6. Copie o **Template ID** (algo como `template_xxxxxxx`)

### 4. Obter Public Key

1. Vá em **"Account"** → **"General"**
2. Encontre a seção **"Public Key"**
3. Copie a **Public Key** (algo como `xxxxxxxxxxxxxx`)

### 5. Configurar Variáveis de Ambiente

1. Abra o arquivo `.env.local` na raiz do projeto
2. Substitua os valores pelas suas credenciais:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
```

3. Salve o arquivo
4. **IMPORTANTE**: Reinicie o servidor de desenvolvimento:
   ```bash
   # Pare o servidor (Ctrl+C) e execute novamente:
   pnpm dev
   ```

## ✅ Testar o Formulário

1. Acesse seu site local
2. Vá até a seção "Let's Connect"
3. Preencha o formulário e envie
4. Você deve receber um email na conta configurada!

## 🔄 Fallback (Sem Configuração)

Se você não configurar o EmailJS, o formulário ainda funciona! Ele abrirá automaticamente seu cliente de email padrão (Gmail, Outlook, etc.) com os dados preenchidos.

## 📝 Notas Importantes

- O plano gratuito do EmailJS permite **200 emails/mês**
- Não compartilhe suas chaves em repositórios públicos
- O arquivo `.env.local` já está no `.gitignore` por segurança
- As variáveis com `NEXT_PUBLIC_` são acessíveis no navegador (isso é seguro para EmailJS)

## 🆘 Problemas Comuns

### Email não está sendo enviado
- Verifique se as credenciais estão corretas no `.env.local`
- Reinicie o servidor de desenvolvimento
- Verifique o console do navegador para erros

### Gmail bloqueando emails
- Certifique-se de ter autorizado o EmailJS na sua conta Google
- Verifique a pasta de spam

### Limite de emails atingido
- O plano gratuito tem limite de 200 emails/mês
- Considere fazer upgrade se necessário

## 🎉 Pronto!

Seu formulário de contato está configurado e funcionando! 🚀
