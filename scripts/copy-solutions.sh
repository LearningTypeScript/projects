# Replacing "? solution" with "? index" means test files only import from the index.
# Projects that use classes with # private members would otherwise report assignability errors.
find projects -type f -name "*.test.*" -print0 | xargs -0 sed -i '' -e 's/\? solution/\? index/g'

# Similarly, "index as unknown as typeof solution" type assertions are used for class #privates.
find projects -type f -name "*.test.*" -print0 | xargs -0 sed -i '' -e 's/as typeof solution/as typeof index/g'

for solutionPath in $(find projects -name \*solution\*); do
	if [[ $solutionPath == */solution.* ]]; then
		replacedPath=${solutionPath//"solution"/"index"}
	else
		replacedPath=${solutionPath//".solution"/""}
	fi

	if [[ "$solutionPath" == "$replacedPath" ]]; then
		echo "Skipping \"$solutionPath\" (no replacement found)."
	else
		echo "Copying from \"$solutionPath\" to \"$replacedPath\"."
		cp $solutionPath $replacedPath
	fi
done
