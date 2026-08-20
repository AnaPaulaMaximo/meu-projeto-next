#  Descubra o Brasil - Landing Page

Uma landing page moderna, responsiva e visualmente atraente dedicada a celebrar a riqueza da cultura brasileira. O projeto destaca nossos principais ritmos musicais, a gastronomia inconfundível e as festas populares que param o país.

## 💻 Sobre o Projeto

Este projeto foi desenvolvido como um estudo de criação de interfaces modernas utilizando **Next.js** e **Tailwind CSS**. A página foi construída com foco em:
- Tipografia limpa e legível.
- Uso de imagens de alta qualidade (via Unsplash) para enriquecer o visual.
- Efeitos de transição (hover) suaves que dão vida aos componentes.
- Layout totalmente responsivo, adaptando-se perfeitamente a dispositivos móveis e desktops.

## ✨ Funcionalidades

- **Hero Section Impactante:** Background com sobreposição de gradiente e um CTA (Call to Action) atrativo.
- **Cards de Ritmos:** Grid interativo com os principais ritmos brasileiros (Samba, Bossa Nova e Forró) com efeitos de elevação (`hover`).
- **Seção de Gastronomia:** Layout intercalado (esquerda/direita) com imagens reais de pratos típicos (Feijoada e Pão de Queijo).
- **Seção de Celebrações:** Layout de duas colunas destacando o Carnaval e as Festas Juninas, com decorações visuais e sombras deslocadas para um design mais "fora da caixa".
- **Rodapé Profissional:** Footer elegante e minimalista.

## 🛠️ Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** (App Router) - Framework React para renderização e estruturação.
- **[React](https://reactjs.org/)** - Biblioteca JavaScript para construção de interfaces.
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utilitário para estilização rápida e responsiva.
- **[Unsplash](https://unsplash.com/)** - Fonte das imagens de alta resolução utilizadas no projeto.

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/) (versão 18.x ou superior recomendada)

### Rodando a aplicação

1. Clone este repositório:
```bash
git clone [https://github.com/seu-usuario/cultura-brasileira-next.git](https://github.com/seu-usuario/cultura-brasileira-next.git)
```

2. Acesse a pasta do projeto no terminal:
```bash
cd cultura-brasileira-next
```

3. Instale as dependências:
```bash
npm install
```

4. Execute a aplicação em modo de desenvolvimento:
```bash
npm run dev
```

5. O servidor iniciará localmente. Acesse no seu navegador:
```text
http://localhost:3000
```

## 📁 Estrutura de Arquivos Principal

A lógica visual e estrutural principal da página encontra-se centralizada no arquivo padrão do App Router:

```text
├── app/
│   ├── globals.css      # Estilos globais e injeção do Tailwind
│   ├── layout.tsx       # Estrutura base do HTML (head, fontes)
│   └── page.tsx         # Todo o código e seções da Landing Page
```

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usá-lo, modificá-lo e compartilhá-lo.

---
Feito com ❤️ e Tailwind CSS.