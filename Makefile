init:
	docker-compose up -d --build
	docker-compose exec app npm install

start:
	docker-compose start
stop:
	docker-compose stop
restart:
	docker-compose restart

app:
	docker-compose exec app bash
npm-dev:
	docker-compose exec app bash -c 'rm -f /tmp/nitro/*.sock && npm run dev'
npm-build:
	docker-compose exec app npm run build

down:
	docker-compose down
down-all:
	docker-compose down --rmi all --volumes --remove-orphans
