Comando para generar modelos:
sequelize-auto -h "localhost" -d "psicobien"  -u "root" -x ""  -p "3306" --dialect "mysql"  -c ".\src\config\db.config.js"  -o ".\src\models\"