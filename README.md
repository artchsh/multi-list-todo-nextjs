# Multi-List Todo App

A flexible, multi-list todo application built with Next.js, shadcn/ui, and Prisma. This app allows users to create multiple todo lists, add tasks with titles, descriptions, and tags, and view tasks in a clean, distraction-free interface.

## Features

- Create and manage multiple todo lists
- Add tasks with titles, descriptions, and tags
- Filter tasks by tags
- View-only mode for distraction-free task review
- Responsive design for mobile and desktop
- Animations for enhanced user experience
- Local SQLite database storage (easily configurable for external databases)
- Progressive Web App (PWA) support for installation on devices

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built using Radix UI and Tailwind CSS
- [Prisma](https://www.prisma.io/) - Next-generation ORM for Node.js and TypeScript
- [Neon Serverless Postgres](https://neon.tech/) - Self-contained, serverless, zero-configuration database engine
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/multi-list-todo-app.git
   cd multi-list-todo-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your database:
   - Create a `.env` file in the root directory
   - Add the following line to the `.env` file:
     ```
     DATABASE_URL="file:./dev.db"
     ```

4. Generate Prisma client and run migrations:
   ```
   npx prisma generate
   npx prisma migrate dev
   ```

5. Build the application:
   ```
   npm run build
   ```

6. Start the server:
   ```
   npm start
   ```

7. Open your browser and navigate to `http://localhost:3000`

## Development

To run the development server:

```
npm run dev
```

## Usage

- Create a new todo list from the home page
- Add tasks to a list by filling out the form at the top of the list page
- Filter tasks by clicking on tag buttons
- View tasks without controls by clicking the "View" button or navigating to `/:listName/view`

## PWA Installation

This app can be installed as a Progressive Web App on supported devices:

1. Open the app in a compatible browser (e.g., Chrome, Edge)
2. Look for the install prompt in the address bar or menu
3. Follow the prompts to install the app on your device

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This application was developed with the assistance of Claude, an AI assistant created by Anthropic. Claude generated the initial code, documentation, and project structure based on given requirements and specifications.
