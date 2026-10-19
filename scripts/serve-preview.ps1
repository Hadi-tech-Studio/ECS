$port = 5173
$htmlPath = "C:\Users\Laptop Zone\.gemini\antigravity\brain\d7e842d8-cee0-40c6-8337-082cf4f96051\footer-preview.html"

if (-not (Test-Path $htmlPath)) {
    Write-Error "Preview file not found at $htmlPath"
    exit 1
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Prefixes.Add("http://127.0.0.1:$port/")

try {
    $listener.Start()
    Write-Output "Preview server is live on http://localhost:$port/"
    
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $response = $context.Response
        
        try {
            $content = [System.IO.File]::ReadAllBytes($htmlPath)
            $response.ContentType = "text/html; charset=utf-8"
            $response.ContentLength64 = $content.Length
            $response.AddHeader("Cache-Control", "no-cache, no-store, must-revalidate")
            $response.OutputStream.Write($content, 0, $content.Length)
        } catch {
            $response.StatusCode = 500
        } finally {
            $response.Close()
        }
    }
} catch {
    Write-Error "Failed to run server: $($_.Exception.Message)"
} finally {
    if ($listener.IsListening) {
        $listener.Stop()
    }
    $listener.Close()
}
