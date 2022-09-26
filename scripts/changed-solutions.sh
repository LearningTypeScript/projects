command=${@:$#}
failed_tests=()
root_dir=$(pwd)

function run_tests {
	echo -e "\nRunning $command for $1"
	cd $1/..
	npm run $command || failed_tests+=("$1")
	cd $root_dir
	return 0
}

for ((i = 1; i <= $# - 1; i++)); do
	file="${!i}"
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
