root_dir=$(pwd)
failed_tests=()

function run_tests {
	echo -e "\nRunning $2 for $1"
	cd $1
	npm run $2 || failed_tests+=("$1")
	cd $root_dir
	return 0
}

for file in $1; do
	dir=$(dirname $file)
	if [ -e $dir/package.json ] || [ -e $dir/solution.ts ] || [ -e $dir/solution.js ]; then
		run_tests $dir
	fi
done

echo ""
for path in ${failed_tests[@]}; do
	echo "$2 failed at $path"
done

if [ ${#failed_tests[@]} -gt 0 ]; then
	exit 1
else
	exit 0
fi
