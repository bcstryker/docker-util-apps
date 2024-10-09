# Use a specific Debian base image for better compatibility
FROM debian:bookworm-slim

# Install essential network troubleshooting tools
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    dnsutils \
    iproute2 \
    mtr \
    nmap \
    netcat-openbsd \
    tcpdump \
    iftop \
    hping3 \
    ethtool \
    socat \
    iperf3 \
    tshark \
    bmon \
    telnet \
    speedtest-cli \
    whois \
    arp-scan \
    iw \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Set entrypoint to keep the container running for interactive use
ENTRYPOINT ["/bin/bash"]
