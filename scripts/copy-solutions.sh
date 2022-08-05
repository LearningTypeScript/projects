# Replacing "? solution" with "? index" means test files only import from the index.
# Projects that use classes with # private members would otherwise report assignability errors.
find projects -type f -name "*.test.*" -print0 | xargs -0 sed -i '' -e 's/\? solution/\? index/g'

for solutionPath in $(find projects -name \*solution\*); do
	if [[ $solutionPath == */solution.t* ]]; then
		replacedPath=${solutionPath//"solution"/"index"}
	else
		replacedPath=${solutionPath//".solution"/""}
	fi

	echo "Copying from \"$solutionPath\" to \"$replacedPath\"."
	cp $solutionPath $replacedPath
done
