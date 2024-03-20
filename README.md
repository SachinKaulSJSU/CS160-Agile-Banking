# CS160-Agile-Banking
## Initial Setup:
Setup virtual environment with dependencies
```bash
# setup venv
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate

# mac users install mysql pkg-config prior to installing requirements
brew install mysql pkg-config

# install dependencies
pip install -r requirements.txt

```

Setup MYSQL database for dev environment:
```bash
# create a .env for the db
MYSQL_HOST='localhost'
MYSQL_USER='root'
MYSQL_PASSWORD='yourpassword'
MYSQL_DATABASE='dbname'
MYSQL_PORT='3306'
```

## Basic Commands:
Run Python virtual environment:
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

