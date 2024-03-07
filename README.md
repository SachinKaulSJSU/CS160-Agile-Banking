## Getting Started

Setup:
```bash
# setup venv
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate

# mac users install mysql pkg-config prior to installing requirements
brew install mysql pkg-config

pip install -r requirements.txt

```

Python virtual environment:
```bash
# activate
venv\Scripts\activate
#or for mac
source venv/bin/activate

#deactivate
deactivate
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
