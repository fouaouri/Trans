all :
	docker compose up --build
clean :
	docker compose -f docker-compose.yml down -v
fclean : clean
	docker compose -f docker-compose.yml stop
	docker system prune -af

re : clean all

# push:
# 	git add .
# 	git commit -m "push"
# 	git push