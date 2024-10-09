# Network Troubleshooting Toolkit

This Docker application provides a comprehensive set of network troubleshooting and performance testing tools. It is designed to be a one-stop environment for network engineers, developers, and system administrators to quickly diagnose and resolve network issues.

## Tools Available

Below is a list of the tools included in this container, along with a brief description and common use cases for each tool:

### 1. `curl`
   - **Description**: A command-line tool for making HTTP/HTTPS requests.
   - **Common Use Case**: Test APIs, download files, or check HTTP headers.
   - **Example**:
     ```
     curl -I https://www.google.com
     ```
     This command retrieves the HTTP headers from `https://www.google.com`.

### 2. `dnsutils` (includes `dig` and `nslookup`)
   - **Description**: Tools for querying DNS records.
   - **Common Use Case**: Verify DNS configurations and look up domain information.
   - **Example (`dig`)**:
     ```
     dig example.com
     ```
     This command retrieves DNS records for `example.com`.
   - **Example (`nslookup`)**:
     ```
     nslookup example.com
     ```
     This command performs a simple DNS lookup for `example.com`.

### 3. `iproute2` (`ip` command)
   - **Description**: Tools for managing network interfaces, routes, and more.
   - **Common Use Case**: View or modify network configuration and routing tables.
   - **Example**:
     ```
     ip addr show
     ```
     This command shows all network interfaces and IP addresses.

### 4. `mtr`
   - **Description**: Combines the functionality of `ping` and `traceroute`.
   - **Common Use Case**: Diagnose network paths and detect packet loss.
   - **Example**:
     ```
     mtr google.com
     ```
     This command shows the network path and latency to `google.com` in real-time.

### 5. `nmap`
   - **Description**: A powerful network scanner for discovering hosts and services.
   - **Common Use Case**: Scan open ports on a remote host.
   - **Example**:
     ```
     nmap -sP 192.168.1.0/24
     ```
     This command performs a ping scan on all devices in the `192.168.1.0/24` subnet.

### 6. `netcat-openbsd` (`nc`)
   - **Description**: A versatile network utility for reading and writing data over the network.
   - **Common Use Case**: Test open ports or send data over TCP/UDP.
   - **Example**:
     ```
     nc -zv 192.168.1.10 80
     ```
     This command checks if port 80 on the host `192.168.1.10` is open.

### 7. `tcpdump`
   - **Description**: A packet analyzer for capturing network traffic.
   - **Common Use Case**: Capture and analyze packets on a specific interface.
   - **Example**:
     ```
     tcpdump -i eth0
     ```
     This command captures packets on the `eth0` interface.

### 8. `iftop`
   - **Description**: A real-time console-based bandwidth usage monitor.
   - **Common Use Case**: Monitor bandwidth usage by host.
   - **Example**:
     ```
     iftop -i eth0
     ```
     This command shows bandwidth usage on the `eth0` interface.

### 9. `hping3`
   - **Description**: A network tool for crafting custom TCP/IP packets.
   - **Common Use Case**: Perform advanced network testing or simulate DDoS attacks.
   - **Example**:
     ```
     hping3 -S 192.168.1.10 -p 80
     ```
     This command sends SYN packets to port 80 on the host `192.168.1.10`.

### 10. `ethtool`
   - **Description**: A tool for querying and changing network interface settings.
   - **Common Use Case**: View or modify NIC settings such as speed or duplex mode.
   - **Example**:
     ```
     ethtool eth0
     ```
     This command displays the current settings of the `eth0` interface.

### 11. `socat`
   - **Description**: A utility similar to `netcat`, but more powerful.
   - **Common Use Case**: Forward ports or create custom network tunnels.
   - **Example**:
     ```
     socat TCP-LISTEN:1234,fork TCP:192.168.1.10:80
     ```
     This command forwards all traffic from local port 1234 to port 80 on the host `192.168.1.10`.

### 12. `iperf3`
   - **Description**: A tool for measuring network bandwidth between two hosts.
   - **Common Use Case**: Perform network performance testing.
   - **Example**:
     ```
     iperf3 -s
     ```
     This command starts an `iperf3` server. On another host, run `iperf3 -c [IP_ADDRESS]` to test throughput.

### 13. `tshark`
   - **Description**: A command-line network protocol analyzer (CLI version of Wireshark).
   - **Common Use Case**: Analyze network traffic in real-time.
   - **Example**:
     ```
     tshark -i eth0
     ```
     This command captures and displays packets on the `eth0` interface.

### 14. `bmon`
   - **Description**: A real-time bandwidth monitor.
   - **Common Use Case**: Monitor real-time bandwidth usage.
   - **Example**:
     ```
     bmon
     ```
     This command starts `bmon` with the default configuration.

### 15. `telnet`
   - **Description**: A network protocol for interacting with remote hosts over TCP.
   - **Common Use Case**: Test open ports or access services using a command-line interface.
   - **Example**:
     ```
     telnet 192.168.1.10 80
     ```
     This command connects to port 80 on the host `192.168.1.10`.

### 16. `speedtest-cli`
   - **Description**: A command-line tool for measuring internet bandwidth using Speedtest.net.
   - **Common Use Case**: Check internet speed.
   - **Example**:
     ```
     speedtest-cli
     ```
     This command performs a speed test and displays the results.

### 17. `whois`
   - **Description**: A utility for querying WHOIS databases.
   - **Common Use Case**: Check domain registration details.
   - **Example**:
     ```
     whois example.com
     ```
     This command retrieves WHOIS information for `example.com`.

### 18. `arp-scan`
   - **Description**: Scans the local network to discover devices using ARP requests.
   - **Common Use Case**: Find devices on the same subnet.
   - **Example**:
     ```
     arp-scan -l
     ```
     This command scans the local network and displays all connected devices.

### 19. `iw`
   - **Description**: A tool for configuring wireless interfaces.
   - **Common Use Case**: View or modify wireless interface settings.
   - **Example**:
     ```
     iw dev
     ```
     This command displays all wireless interfaces and their configurations.

## Running the Toolkit

To start the toolkit container:

```
docker compose up -d
```

To access the toolkit interactively:

```
docker exec -it network-toolkit /bin/bash
```

Once inside the container, you can use any of the above tools for testing and troubleshooting.