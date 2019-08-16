# Makefile to help clean out the Header Setter directory when needed

BIN_DIR=bin 
SRC_DIR=src 
DEF_BRA="beta"

clean:
	rm -rf ./
	echo "WARN --> Cleaning entire directory"
	touch .change
	echo ">] attempt to clean directory + commit. assumed version v1.6.5 -> makefile\n" >> .change
purge-modules:
	rm -rf ./node_modules & rm -rf ./src/node_modules
	touch .change
	echo ">] purged || removed node_modules -> makefile\n" >> .change
purge-gitignore:
	rm -rf ./.gitignore
	echo "WARN --> Will now push 'node_modules' folder to repository"
	touch .change
	echo ">] purged || removed .gitignore -> makefile\n" >> .change
commit:
	echo "--> Starting Commit Proccess <--"
	echo "\n-> Adding all new changes"
	git add -A
	echo "-> Commit-ing files"
	git commit -m "Unspecified Changes by Makefile"
	echo "-> Pushing to branch 'beta'"
	git push origin beta 
	echo "-> Push Complete"

define EXE_OBJS
	$(patsubst %, %.o, $(1)) $(patsubst %, $(BIN_DIR)/%.o, $(2))
endef
