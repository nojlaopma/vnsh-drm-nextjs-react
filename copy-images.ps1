# Source and destination paths
$sourceDir = "D:\Work\DRM\vnls2\VNSH Laser Strike Training System_files"
$destDir = "D:\Work\DRM\vnls2\vnls2-react\public\images"

# Create destination directory if it doesn't exist
if (-not (Test-Path -Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force
}

# Get all image files from source directory
$imageFiles = Get-ChildItem -Path $sourceDir -Include "*.webp","*.jpg","*.png","*.gif" -File -Recurse

# Copy each image to the destination directory
foreach ($file in $imageFiles) {
    $destPath = Join-Path -Path $destDir -ChildPath $file.Name
    Copy-Item -Path $file.FullName -Destination $destPath -Force
    Write-Host "Copied $($file.Name) to $destPath"
}

Write-Host "All images have been copied to $destDir"
