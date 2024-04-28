FROM python:3.12.2

WORKDIR /backend

ENV MYSQL_DATABASE: agile_bank
ENV MYSQL_USER: team1
ENV MYSQL_PASSWORD: team1
ENV MYSQL_HOST: db
ENV MYSQL_PORT: 3306  

COPY requirements.txt /backend/

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

WORKDIR /backend/services/

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

