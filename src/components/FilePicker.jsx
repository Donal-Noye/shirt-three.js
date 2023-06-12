import {CustomButton} from "./index.js";

function FilePicker({file, setFile, readFile}) {
	return (
		<div className="filepicker-container">
			<div className="flex-1 flex flex-col">
				<input
					type="file"
					id="file-upload"
					accept="image/*"
					onChange={e => setFile(e.target.files[0])}
				/>
				<label className="filepicker-label" htmlFor="file-upload">
					Upload File
				</label>

				<p className="mt-2 text-gray-500 text-xs truncate">
					{file === '' ? 'No file Selected' : file.name}
				</p>
			</div>

			<div className="mt-4 flex flex-wrap gap-3">
				<CustomButton
					type="outline"
					title="Logo"
					handleClick={() => readFile("logo")}
					customStyle="text-xs"
				/>
				<CustomButton
					type="filled"
					title="Full"
					handleClick={() => readFile("full")}
					customStyle="text-xs"
				/>
			</div>
		</div>
	);
}

export default FilePicker;